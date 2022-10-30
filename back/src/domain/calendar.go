package domain

type Calendar struct {
	CalendarId     uint32
	CalenderId     uint32
	CalenderName   string
	CalenderUserId string
	TimeZone       TimeZone
	// TODO: add more fields
	// sou7はCalendarがUserIdを持つのはおかしいと思っているけれど、他の人はどう考えるか話したいなと
	Events []*Event
}

type TimeZone string

const (
	TOKYO = Role("Japan/Tokyo")
)

type CalendarRepository interface {
	Save(calendar *Calendar) (*Calendar, error)
	Get(calendarId uint32) (*Calendar, error)
}
