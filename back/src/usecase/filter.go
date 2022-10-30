package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type FilterReadModel interface {
	GetByUserId(userId string) ([]domain.Filter, error)
}
