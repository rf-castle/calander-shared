package domain

type OriginalCalendar struct {
	OriginalCalendarId uint32
	Name               string
	UserId             string
	CalendarId         uint32
	FetchOrigin        FetchOriginModel
}

type FetchOriginModel interface {
	Fetch() (Calendar, error)
}

type OriginalCalendarRepository interface {
	Save(originalCalendar OriginalCalendar)
	Get(originalCalendarId uint32) (OriginalCalendar, error)
}
