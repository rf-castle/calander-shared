package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type RoomInformation struct {
	Room    *domain.Room
	members []*domain.Member
}

type UseCase interface {
	CreateUser(name string) (*domain.User, error)
	GetJoinedRooms(userId string) ([]*domain.RoomResult, error)
	CreateRoom(userId string, name string) (*domain.Room, error)
	ChangeMemberRole(roomId string, userId string, userRole string) error
	GetRoomById(userId string) (*RoomInformation, error)
}
