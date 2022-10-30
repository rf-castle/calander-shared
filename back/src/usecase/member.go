package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type MemberReadModel interface {
	GetByRoomId(roomId string) ([]domain.Member, error)
}
