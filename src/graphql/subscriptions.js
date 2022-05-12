/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
    subscription OnCreateQuiz($owner: String) {
        onCreateQuiz(owner: $owner) {
            id
            name
            description
            filePath
            category
            difficulty
            type
            question
            choices
            correct_answer
            incorrect__answers
            createdAt
            updatedAt
            owner
        }
    }
`;
export const onUpdateQuiz = /* GraphQL */ `
    subscription OnUpdateQuiz($owner: String) {
        onUpdateQuiz(owner: $owner) {
            id
            name
            description
            filePath
            category
            difficulty
            type
            question
            choices
            correct_answer
            incorrect__answers
            createdAt
            updatedAt
            owner
        }
    }
`;
export const onDeleteQuiz = /* GraphQL */ `
    subscription OnDeleteQuiz($owner: String) {
        onDeleteQuiz(owner: $owner) {
            id
            name
            description
            filePath
            category
            difficulty
            type
            question
            choices
            correct_answer
            incorrect__answers
            createdAt
            updatedAt
            owner
        }
    }
`;
