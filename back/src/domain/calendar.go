package domain

type Calendar struct {
	CalendarId uint32
	// TODO: add more fields
	// sou7はCalendarがUserIdを持つのはおかしいと思っているけれど、他の人はどう考えるか話したいなと
	Events []*Event
}

type CalendarRepository interface {
	Save(calendar *Calendar) (*Calendar, error)
	Get(calendarId uint32) (*Calendar, error)
}
