package usecase

import (
	"github.com/gofrs/uuid"
	"github.com/rf-castle/calander-shared/back/src/domain"
)

type UseCaseImpl struct {
	userRepository     domain.UserRepository
	userReadWriteModel UserReadWriteModel
	roomRepository     domain.RoomRepository
	memberRepository   domain.MemberRepository
	memberReadModel    MemberReadModel
	filterRepository   domain.FilterRepository
	calendarRepository domain.CalendarRepository
}

func (this *UseCaseImpl) CreateUser(name string) (*domain.User, error) {
	userId, err := uuid.NewV4()
	if err != nil {
		return nil, err
	}
	user := domain.NewUser(userId.String(), name)
	err = this.userRepository.Save(user)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (this *UseCaseImpl) GetJoinedRooms(userId string) ([]RoomWithRole, error) {
	return this.userReadWriteModel.GetJoinedRoomsWithRoles(userId)
}

func (this *UseCaseImpl) CreateRoom(userId string, name string) (*domain.Room, error) {
	roomId, err := uuid.NewV4()
	if err != nil {
		return nil, err
	}
	room := domain.NewRoom(roomId.String(), name)
	err = this.roomRepository.Save(room)
	if err != nil {
		return nil, err
	}
	_, err = this.memberRepository.CreateMember(userId, roomId.String(), name, domain.ADMIN)
	if err != nil {
		return nil, err
	}
	return room, nil
}

func (this *UseCaseImpl) ChangeMemberRole(roomId string, userId string, userRole string) error {
	member, err := this.memberRepository.GetByUserIdAndRoomId(userId, roomId)
	if err != nil {
		return err
	}
	member.ChangeRole(domain.Role(userRole))
	err = this.memberRepository.Save(member)
	if err != nil {
		return err
	}
	return nil
}

func (this *UseCaseImpl) GetRoomById(roomId string) (*RoomInformation, error) {
	room, err := this.roomRepository.Get(roomId)
	if err != nil {
		return nil, err
	}
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
