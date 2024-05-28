import axios from 'axios';

export class EmployeeService {
    BASE_URL = "http://localhost:3007/employee";

    async getEmployee() {
        const response = await axios.get(this.BASE_URL);
        return response.data;
    }

    async addEmployee(employee) {
        const response = await axios.post(this.BASE_URL, employee);
        return response.data;
    }

    async deleteEmployee(id) {
        console.log(id)
        const response = await axios.delete(`${this.BASE_URL}/${id}`);

        return response.data;
    }

    async updateEmployee(employee) {
        const response = await axios.put(`${this.BASE_URL}/${employee.id}`, employee);
        return response.data;
    }

    async getEmployeeById(id) {
        const response = await axios.get(`${this.BASE_URL}/${id}`);
        return response.data;
    }

    async searchEmployee(searchTerm) {
        const response = await axios.get(`${this.BASE_URL}?q=${searchTerm}`);
        return response.data;
    }

    async getEmployeeByPage(page, limit) {
        const response = await axios.get(`${this.BASE_URL}?_page=${page}&_limit=${limit}`);
        return response.data;
    }

    async getEmployeeCount() {
        const response = await axios.get(`${this.BASE_URL}/count`);
        return response.data;
    }

    async getEmployeeByPageAndSearch(page, limit, searchTerm) {
        const response = await axios.get(`${this.BASE_URL}?q=${searchTerm}&_page=${page}&_limit=${limit}`);
        return response.data;
    }

    async getEmployeeCountBySearch(searchTerm) {
        const response = await axios.get(`${this.BASE_URL}/count?q=${searchTerm}`);
        return response.data;
    }

    async getEmployeeCountByPage(page, limit) {
        const response = await axios.get(`${this.BASE_URL}/count?_page=${page}&_limit=${limit}`);
        return response.data;
    }
}