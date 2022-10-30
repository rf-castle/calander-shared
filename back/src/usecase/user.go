package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type RoomWithRole struct {
	Room *domain.Room
	Role domain.Role
}

type UserReadWriteModel interface {
	GetJoinedRoomsWithRoles(userId string) ([]RoomWithRole, error)
}