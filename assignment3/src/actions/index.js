import axios from 'axios';

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
