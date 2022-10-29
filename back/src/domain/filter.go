package domain

type Filter struct {
	FilterId             uint64
	MemberId             uint64
	FilterOrder          uint64
	FilterQuery          string
	FilteringCalenderId  *uint64
	FilteredPublicity    string
	FilteredAvailability string
}
