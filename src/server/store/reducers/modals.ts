import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modalState {
    followingOptionsModal: boolean;
    ignoreOptionsModal: boolean;
    userProfileModal: boolean;
    restrictOptionsModal: boolean;
    profileModal: boolean;
    eventDatePickerModal: {
        start_date: string;
        end_date: string;
        modal: boolean;
    };
    eventInviteesList: {
        invitees: Array<string>;
        modal: boolean;
    };
    postCommentModal: {
        postId: number;
        modal: boolean;
    }
    sharePostModal: {
        postId: number;
        modal: boolean;
    },
    viewPostProfileModal: {
        firstname: string;
        lastname: string;
        username: string;
        profileId: number,
        modal: boolean,
    },
    createFavCatModal: boolean;
    chatOptionsModal: boolean;
    individualSentMessageModal: boolean;
    individualReceivedMessageModal: boolean;
    chatMemberModal: boolean;
    groupChatOptionsModal: boolean;
    groupChatMediaImageView: {
        id: number;
        modal: boolean;
    };
    chatAttachmentsModal: boolean;
    groupChatNameImageModal: {
        id: number;
        name: string;
        description: string;
        image: string;
        modal: boolean
    },
    groupChatAdminModeratorsModal: {
        id: number;
        modal: boolean;
    },
    groupChatDeleteModal: {
        id: number;
        modal: boolean;
    },
    notificationsModal: boolean,
}

const initialState: modalState = {
    followingOptionsModal: false,
    ignoreOptionsModal: false,
    userProfileModal: false,
    restrictOptionsModal: false,
    profileModal: false,
    eventDatePickerModal: {
        start_date: '',
        end_date: '',
        modal: false,
    },
    eventInviteesList: {
        invitees: ["dani@email.com", "sarah@email.com"],
        modal: false,
    },
    postCommentModal: {
        postId: 0,
        modal: false,
    },
    sharePostModal: {
        postId: 0,
        modal: false,
    },
    viewPostProfileModal: {
        profileId: 0,
        firstname: '',
        lastname: '',
        username: '',
        modal: false,
    },
    createFavCatModal: false,
    chatOptionsModal: false,
    individualSentMessageModal: false,
    individualReceivedMessageModal: false,
    chatMemberModal: false,
    groupChatOptionsModal: false,
    groupChatMediaImageView: {
        id: 0,
        modal: false,
    },
    chatAttachmentsModal: false,
    groupChatNameImageModal: {
        id: 0,
        name: '',
        description: '',
        image: '',
        modal: false,
    },
    groupChatAdminModeratorsModal: {
        id: 0,
        modal: false,
    },
    groupChatDeleteModal: {
        id: 0,
        modal: false,
    },
    notificationsModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleFollowingOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.followingOptionsModal = action.payload
        },
        toggleIgnoreOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.ignoreOptionsModal = action.payload
        },
        toggleUserProfileModal: (state, action: PayloadAction<boolean>) => {
            state.userProfileModal = action.payload
        },
        toggleRestrictOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.restrictOptionsModal = action.payload
        },
        toggleProfileModal: (state, action: PayloadAction<boolean>) => {
            state.profileModal = action.payload
        },
        toggleEventDatePickerModal(state, action: PayloadAction<boolean>) {
            state.eventDatePickerModal.modal = action.payload
        },
        setEventDatePickerStartDate(state, action: PayloadAction<string>) {
            state.eventDatePickerModal.start_date = action.payload
        },
        setEventDatePickerEndtDate(state, action: PayloadAction<string>) {
            state.eventDatePickerModal.end_date = action.payload
        },
        toggleEventInviteesList(state, action: PayloadAction<boolean>) {
            state.eventInviteesList.modal = action.payload
        },
        pushEventInvitees(state, action: PayloadAction<{ email: string }>) {
            state.eventInviteesList.invitees.push(action.payload.email)
        },
        togglePostCommentsModal(state, action: PayloadAction<{postId: number, modal: boolean}>) {
            state.postCommentModal.modal = action.payload.modal;
            state.postCommentModal.postId = action.payload.postId;
        },
        toggleSharePostModal(state, action: PayloadAction<{postId: number, modal: boolean}>) {
            state.sharePostModal.modal = action.payload.modal;
            state.sharePostModal.postId = action.payload.postId;
        },
        toggleViewPostProfileModal(state, action: PayloadAction<{profileId: number, firstname: string, lastname: string, username: string, modal: boolean}>) {
            state.viewPostProfileModal.modal = action.payload.modal;
            state.viewPostProfileModal.profileId = action.payload.profileId;
            state.viewPostProfileModal.firstname = action.payload.firstname;
            state.viewPostProfileModal.lastname = action.payload.lastname;
            state.viewPostProfileModal.username = action.payload.username;
        },
        toggleCreateFavCatModal(state, action: PayloadAction<boolean>) {
            state.createFavCatModal = action.payload;
        },
        toggleChatOptionsModal(state, action: PayloadAction<boolean>) {
            state.chatOptionsModal = action.payload;
        },
        toggleIndividualSentMessageModal(state, action: PayloadAction<boolean>) {
            state.individualSentMessageModal = action.payload;
        },
        toggleIndividualReceivedMessageModal(state, action: PayloadAction<boolean>) {
            state.individualReceivedMessageModal = action.payload;
        },
        toggleChatMemberModal(state, action: PayloadAction<boolean>) {
            state.chatMemberModal = action.payload;
        },
        toggleGroupChatOptionsModal(state, action: PayloadAction<boolean>) {
            state.groupChatOptionsModal = action.payload;
        },
        toggleGroupChatMediaImageView(state, action: PayloadAction<{id: number, modal: boolean}>) {
            state.groupChatMediaImageView.id = action.payload.id;
            state.groupChatMediaImageView.modal = action.payload.modal;
        },
        toggleChatAttachmentsModal(state, action: PayloadAction<boolean>) {
            state.chatAttachmentsModal = action.payload;
        },
        toggleGroupChatNameImageModal(state, action: PayloadAction<{ id: number; name: string; description: string; image: string; modal: boolean }>) {
            state.groupChatNameImageModal.id = action.payload.id;
            state.groupChatNameImageModal.name = action.payload.name;
            state.groupChatNameImageModal.description = action.payload.description;
            state.groupChatNameImageModal.image = action.payload.image;
            state.groupChatNameImageModal.modal = action.payload.modal;
        },
        toggleGroupChatAdminModeratorsModal(state, action: PayloadAction<{ id: number; modal: boolean }>) {
            state.groupChatAdminModeratorsModal.id = action.payload.id;
            state.groupChatAdminModeratorsModal.modal = action.payload.modal;
        },
        toggleGroupChatDeleteModal(state, action: PayloadAction<{ id: number; modal: boolean }>) {
            state.groupChatDeleteModal.id = action.payload.id;
            state.groupChatDeleteModal.modal = action.payload.modal;
        },
        toggleNotificationsModal(state, action: PayloadAction<boolean>) {
            state.notificationsModal = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    toggleFollowingOptionsModal,
    toggleIgnoreOptionsModal,
    toggleUserProfileModal,
    toggleRestrictOptionsModal,
    toggleProfileModal,
    toggleEventDatePickerModal,
    setEventDatePickerStartDate,
    setEventDatePickerEndtDate,
    toggleEventInviteesList,
    pushEventInvitees,
    togglePostCommentsModal,
    toggleSharePostModal,
    toggleViewPostProfileModal,
    toggleCreateFavCatModal,
    toggleChatOptionsModal,
    toggleIndividualSentMessageModal,
    toggleIndividualReceivedMessageModal,
    toggleChatMemberModal,
    toggleGroupChatOptionsModal,
    toggleGroupChatMediaImageView,
    toggleChatAttachmentsModal,
    toggleGroupChatNameImageModal,
    toggleGroupChatAdminModeratorsModal,
    toggleGroupChatDeleteModal,
    toggleNotificationsModal,
} = modalSlice.actions

export default modalSlice.reducer