export function addMessage(text) {
    return {
        type: 'ADD_MESSAGE',
        text
    }
}

export function deleteMessage(index) {
    return {
        type: 'DELETE_MESSAGE',
        index
    }
}

export function getMessages(texts) {
    return {
        type: 'GET_MESSAGE',
        texts
    }
}

export function clearMessages() {
    return {
        type: 'CLEAR_MESSAGES'
    }
}

