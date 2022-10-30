package domain

type Calendar struct {
	CalendarId     uint32
	CalenderName   string
	CalenderUserId string
	// TODO: add more fields
	Events []*Event
}

type CalendarRepository interface {
	Save(calendar *Calendar) (*Calendar, error)
	Get(calendarId uint32) (*Calendar, error)
}
