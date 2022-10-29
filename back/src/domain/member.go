package domain

type Member struct {
	MemberId uint64
	UserId   string
	RoomId   string
	Nickname string
	Status   string
}

type MemberRepository interface {
	GetMemberByUserIdAndRoomId(userId string, roomId string) (*Member, error)
}
