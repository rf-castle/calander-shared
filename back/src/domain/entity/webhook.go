package entity

type Webhook struct {
	WebhookId   uint64
	RoomId      string
	ServiceName string
	Url         string
}
