/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuiz = /* GraphQL */ `
    mutation CreateQuiz(
        $input: CreateQuizInput!
        $condition: ModelQuizConditionInput
    ) {
        createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
    mutation UpdateQuiz(
        $input: UpdateQuizInput!
        $condition: ModelQuizConditionInput
    ) {
        updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
    mutation DeleteQuiz(
        $input: DeleteQuizInput!
        $condition: ModelQuizConditionInput
    ) {
        deleteQuiz(input: $input, condition: $condition) {
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
