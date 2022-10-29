package domain

type Member struct {
	MemberId uint32
	UserId   string
	RoomId   string
	Nickname string
	Role     Role
}

type Role string

const (
	ADMIN   = Role("admin")
	GENERAL = Role("general")
	WAITING = Role("waiting")
)

type MemberRepository interface {
	Save(member *Member) error
	GetByUserIdAndRoomId(userId string, roomId string) (*Member, error)
}

func (member *Member) ChangeRole(newRole Role) {
	member.Role = newRole
}
