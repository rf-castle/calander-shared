package usecase

import (
	"github.com/gofrs/uuid"
	"github.com/rf-castle/calander-shared/back/src/domain"
)

type RoomInformation struct {
	Room    *domain.Room
	members []domain.Member
}

type UseCase interface {
	CreateUser(name string) (*domain.User, error)
	GetJoinedRooms(userId string) ([]RoomWithRole, error)
	CreateRoom(userId string, name string) (*domain.Room, error)
	ChangeMemberRole(roomId string, userId string, userRole string) error
	GetRoomById(roomId string) (*RoomInformation, error)
	AddFilter(
		userId string,
		roomId string,
		filterQuery string,
		filteringCalendarId *uint32,
		filterdPublicity domain.Publicity,
		filterdAvailability domain.Availability) error
	SwapFilter(filterAId uint32, filterBId uint32) error
}

type UseCaseImpl struct {
	userRepository     domain.UserRepository
	userReadWriteModel UserReadWriteModel
	roomRepository     domain.RoomRepository
	memberRepository   domain.MemberRepository
	memberReadModel    MemberReadModel
	filterRepository   domain.FilterRepository
	calendarRepository domain.CalendarRepository
}

func NewUseCase(
	userRepository domain.UserRepository,
	roomRepository domain.RoomRepository,
	memberRepository domain.MemberRepository,
	filterRepository domain.FilterRepository,
	calendarRepository domain.CalendarRepository) UseCase {
	return &UseCaseImpl{
		userRepository:     userRepository,
		roomRepository:     roomRepository,
		memberRepository:   memberRepository,
		filterRepository:   filterRepository,
		calendarRepository: calendarRepository,
	}
}

func (this *UseCaseImpl) CreateUser(name string) (*domain.User, error) {
	// generate userId
	userId := uuid.NewV4().String()

	// create user
	user := domain.NewUser(userId, name)

	// save user
	err := this.userRepository.Save(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (this *UseCaseImpl) GetJoinedRooms(userId string) ([]RoomWithRole, error) {
	return this.userReadWriteModel.GetJoinedRoomsWithRoles(userId)
}

func (this *UseCaseImpl) CreateRoom(userId string, name string) (*domain.Room, error) {
	// generate roomId
	roomId := uuid.NewV4().String()

	// create room
	room := domain.NewRoom(roomId, name)

	// save room
	err := this.roomRepository.Save(room)
	if err != nil {
		return nil, err
	}

	// create member
	_, err = this.memberRepository.CreateMember(userId, roomId, name, domain.ADMIN)
	if err != nil {
		return nil, err
	}

	return room, nil
}

func (this *UseCaseImpl) ChangeMemberRole(roomId string, userId string, userRole string) error {
	// get member
	member, err := this.memberRepository.GetByUserIdAndRoomId(userId, roomId)
	if err != nil {
		return err
	}

	// change role
	member.ChangeRole(domain.Role(userRole))

	// save member
	err = this.memberRepository.Save(member)
	if err != nil {
		return err
	}

	return nil
}

func (this *UseCaseImpl) GetRoomById(roomId string) (*RoomInformation, error) {
	// get room
	room, err := this.roomRepository.Get(roomId)
	if err != nil {
		return nil, err
	}

	// get members
	members, err := this.memberReadModel.GetByRoomId(roomId)
	if err != nil {
		return nil, err
	}

	roomInformation := RoomInformation{
		Room:    room,
		members: members,
	}

	return &roomInformation, nil
}

func (this *UseCaseImpl) AddFilter(
	userId string,
	roomId string,
	filterQuery string,
	filteringCalendarId *uint32,
	filterdPublicity domain.Publicity,
	filterdAvailability domain.Availability) error {

	member, err := this.memberRepository.GetByUserIdAndRoomId(userId, roomId)
	if err != nil {
		return err
	}

	this.filterRepository.Create(member.MemberId, filterQuery, filteringCalendarId, filterdPublicity, filterdAvailability)

	return nil
}

func (this *UseCaseImpl) SwapFilter(filterAId uint32, filterBId uint32) error {
	filterA, err := this.filterRepository.Get(filterAId)
	if err != nil {
		return err
	}
	filterB, err := this.filterRepository.Get(filterBId)
	if err != nil {
		return err
	}
	filterAOrder := filterA.Order
	filterA.ChangeOrder(filterB.Order)
	filterB.ChangeOrder(filterAOrder)
	err = this.filterRepository.Save(filterA)
	if err != nil {
		return err
	}
	err = this.filterRepository.Save(filterB)
	if err != nil {
		return err
	}
	return nil
}
