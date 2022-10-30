package specificusecase

// 外部とのやり取りにurlを使うことを知っていることが特徴

import (
// "github.com/rf-castle/calander-shared/back/src/domain"
// "github.com/rf-castle/calander-shared/back/src/usecase"
)

// 未確定
type SpecificUseCase interface {
	// ListOriginalCalendars(userId string) ([]domain.Calendar, error)
	AddOriginalCalendar(userId string, calendarUrl string, calendarName string) error
	ExportCalendar(calendarId uint32) (string, error)
}
