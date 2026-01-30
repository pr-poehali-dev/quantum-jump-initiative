-- Создание таблицы для хранения заявок на регистрацию
CREATE TABLE IF NOT EXISTS registration_requests (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    employee_count VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

-- Индекс для быстрого поиска по email
CREATE INDEX idx_registration_email ON registration_requests(email);

-- Индекс для фильтрации по статусу
CREATE INDEX idx_registration_status ON registration_requests(status);
