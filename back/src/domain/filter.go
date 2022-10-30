package domain

type Filter struct {
	FilterId             uint32
	MemberId             uint32
	FilterOrder          uint32
	FilterQuery          string
	FilteringCalenderId  *uint32
	FilteredPublicity    Publicity
	FilteredAvailability Availability
}

type Publicity string

const (
	OPEN   = Publicity("open")
	SHADOW = Publicity("shadow")
)

type Availability string

const (
	OK     = Availability("ok")
	SO_SO  = Availability("so-so")
	NG     = Availability("ng")
	IGNORE = Availability("ignore")
)

type FilterRepository interface {
	GetByMemberId(memberId uint32) ([]*Filter, error)
}
