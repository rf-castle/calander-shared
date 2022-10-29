package domain

type Notification struct {
	WebhookId   uint64
	RoomId      string
	ServiceName string
	Url         string
}
type NotificationRepository interface {
}
