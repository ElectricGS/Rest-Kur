export interface TabitRequest {
    organization:                 string;
    type:                         string;
    standby_reservation:          boolean;
    seats_count:                  number;
    preference:                   string;
    arriving_within:              null;
    reserved_from:                Date;
    online_booking_source_client: OnlineBookingSourceClient;
}

export interface OnlineBookingSourceClient {
    name:        string;
    environment: string;
}

export interface TabitPerfectResponse {
    reservation: Reservation;
}

export interface Reservation {
    online_booking_source_client: OnlineBookingSourceClient;
    reservation_details:          ReservationDetails;
    email_notifications:          EmailNotifications;
    state:                        string;
    organization:                 string;
    last_modified:                null;
    last_modified_by:             null;
    last_modified_by_name:        null;
    online_booking:               boolean;
    temp_reservation:             boolean;
    standby_reservation:          boolean;
    pending_approval:             boolean;
    block_review:                 boolean;
    exclude_from_remind_all:      boolean;
    order_life_cycle_log:         any[];
    order_fired:                  null;
    hotel_guests_ids:             any[];
    _id:                          string;
    type:                         string;
    online_booking_source:        string;
    temp_reservation_expires:     Date;
    created_by:                   string;
    created:                      Date;
    archived_log:                 any[];
    order_in_use_locks:           any[];
    deposit_payment_log:          any[];
    __v:                          number;
    archived_log_json:            string;
    deposit_payment_log_json:     string;
}

export interface EmailNotifications {
    enabled: boolean;
}

export interface OnlineBookingSourceClient {
    name:        string;
    version:     null;
    environment: string;
}

export interface ReservationDetails {
    customer:                    Customer;
    reserved_tables_ids:         any[];
    reserved_tables_locked:      boolean;
    reserved_until_is_estimated: boolean;
    preference:                  string;
    preferences:                 any[];
    tags:                        Tag[];
    notify_almost_done:          boolean;
    seats_count:                 number;
    reserved_from:               Date;
    reserved_until:              Date;
    additional_customers:        any[];
    reserved_tables_ids_json:    string;
    tags_json:                   string;
    preferences_json:            string;
}

export interface Customer {
    tags:      any[];
    tags_json: string;
}

export interface Tag {
    value:       string;
    string_key?: string;
}

export interface TabitParcialResponse {
    description_string:          string;
    alternative_results:         AlternativeResult[];
    standby_reservation_allowed: boolean;
}

export interface AlternativeResult {
    requested_day_result: boolean;
    title_timestamp:      Date;
    time_slots_by_area:   boolean;
    time_slots:           TimeSlot[];
}

export interface TimeSlot {
    name:       string;
    time_slots: Date[];
}
