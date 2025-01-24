import apiClient from '@/services/apiClient';

export async function getValidationMessage() {
    try {
        const response = await apiClient.get('/validation');
        return response.data;
    } catch (error) {
        console.error('Error fetching validation message:', error);
        throw error;
    }
}
