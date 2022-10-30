package domain

type Calender struct {
	CalenderId     uint32
	CalenderName   string
	CalenderUserId string
	TimeZone       TimeZone
	Events         []Event
}

type TimeZone string

const (
	TOKYO = Role("Japan/Tokyo")
)

type CalenderRepository interface {
}
