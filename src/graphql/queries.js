/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
    query GetQuiz($id: ID!) {
        getQuiz(id: $id) {
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
export const listQuizzes = /* GraphQL */ `
    query ListQuizzes(
        $filter: ModelQuizFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
        }
    }
`;
