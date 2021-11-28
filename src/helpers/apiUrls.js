const API_ROOT = "http://127.0.0.1:8080"

export const apiUrls = {
    login: () => `${API_ROOT}/authenticate`,
    signup: () => `${API_ROOT}/register`,
    createGroup: () => `${API_ROOT}/createGroup`,
    getUserGroups: () => `${API_ROOT}/getUserGroups`,
    getGroupAssignmnets: (groupId) => `${API_ROOT}/getGroupAssignments/${groupId}/`,
    createAssignment: () => `${API_ROOT}/createAssignment`,
    openAdminAssignmentView: (assignmentId) => `${API_ROOT}/adminOpenAssignment/${assignmentId}`,
    openStudentAssignmentView: (assignmentId) => `${API_ROOT}/studentOpenAssignment/${assignmentId}`,
    getGroupMembers: (groupId) => `${API_ROOT}/getGroupMembers/${groupId}`,
    submitAssignment: () => `${API_ROOT}/submitAssignment/`,
    getSubmission: (submissionId) => `${API_ROOT}/getSubmission/${submissionId}/`,
    submitFeedback: () => `${API_ROOT}/submitFeedback/`,
}