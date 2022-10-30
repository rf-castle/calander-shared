package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type RoomInformation struct {
	Room    *domain.Room
	members []*domain.Member
}

type UseCase interface {
	CreateUser(name string) (*domain.User, error)
	GetJoinedRooms(userId string) ([]RoomInformation, error)
	CreateRoom(userId string, name string) (*domain.Room, error)
	ChangeMemberRole(roomId string, userId string, userRole string) error
	GetRoomById(userId string) (*RoomInformation, error)
	AddFilter(
		userId string,
		filterQuery string,
		filteringCalendarId *uint32,
		filterdPublicity domain.Publicity,
		filterdAvailability domain.Availability) error
	SwapFilter(filterAId uint32, filterBId uint32) error
}

type UseCaseImpl struct {
	userRepository     domain.UserRepository
	roomRepository     domain.RoomRepository
	memberRepository   domain.MemberRepository
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
	panic("not implemented")
}

func (this *UseCaseImpl) GetJoinedRooms(userId string) ([]RoomInformation, error) {
	panic("not implemented")
}

func (this *UseCaseImpl) CreateRoom(userId string, name string) (*domain.Room, error) {
	panic("not implemented")
}

func (this *UseCaseImpl) ChangeMemberRole(roomId string, userId string, userRole string) error {
	panic("not implemented")
}

func (this *UseCaseImpl) GetRoomById(userId string) (*RoomInformation, error) {
	panic("not implemented")
}

func (this *UseCaseImpl) AddFilter(
	userId string,
	filterQuery string,
	filteringCalendarId *uint32,
	filterdPublicity domain.Publicity,
	filterdAvailability domain.Availability) error {
	panic("not implemented")
}

func (this *UseCaseImpl) SwapFilter(filterAId uint32, filterBId uint32) error {
	panic("not implemented")
}
