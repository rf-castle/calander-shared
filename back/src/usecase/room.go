package usecase

import (
	"github.com/rf-castle/calander-shared/back/src/domain"
)

type RoomInformation struct {
	Room    *domain.Room
	members []domain.Member
}
