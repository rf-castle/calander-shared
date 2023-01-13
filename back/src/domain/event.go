package domain

// 時間関連のフィールドは東京時間(UTC+9)のデータをいれてください

type Event struct {
	CalendarId     uint32
	CalenderId     uint32
	CalenderName   string
	CalenderUserId string
	// TODO: add more fields
	// sou7はCalendarがUserIdを持つのはおかしいと思っているけれど、他の人はどう考えるか話したいなと
	Events []*Event
}

// EventはCalenderの中に含まれるもので、単体では扱わないのでEventRepoはない
