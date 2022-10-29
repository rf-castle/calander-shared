package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type UseCase interface {
	CreateUser(name string) (*domain.User, error)
}
