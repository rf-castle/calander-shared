package domain

type Filter struct {
	FilterId             uint32
	MemberId             uint32
	FilterOrder          uint32
	FilterQuery          string
	FilteringCalenderId  *uint32
	FilteredPublicity    string
	FilteredAvailability string
}

type FilterRepository interface {
	GetByMemberId(memberId uint32) ([]*Filter, error)
}
