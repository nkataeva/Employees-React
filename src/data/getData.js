export async function getData() {
    try {
        const response = await fetch(`http://localhost:3001/data`); {
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Ошибка запроса');
            }
        }
    } catch (error) {
        console.log(error);
    }
}