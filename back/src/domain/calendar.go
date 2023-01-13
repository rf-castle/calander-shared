package domain

type Calendar struct {
	CalendarId     *uint32
	CalenderName   string
	CalenderUserId *string
	// TODO: add more fields
	Events      []*Event
	FetchOrigin *FetchOrigin
}

type FetchOrigin interface {
	Fetch() (Calendar, error)
}

type CalendarRepository interface {
	Save(calendar *Calendar) (*Calendar, error) // repoで登録するときはCalenderId,CalenderUserIdがnilは許さない
	Get(calendarId uint32) (*Calendar, error)
}
