const DBfetchItems = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8090/api/collections/spese/records");
    const data = await response.json();

    const mapped = data.items.map(item => {
        const { id, name, price, date } = item;
        return { id, name, price: Number(price), date: new Date(date) };
    });

    return mapped;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

const DBpushItem = async (item) => {
  try {
    const response = await fetch("http://127.0.0.1:8090/api/collections/spese/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
    return await response.json();
  } catch (error) {
    console.error("Error pushing item:", error);
    return null;
  }
};

const DBDeleteItem = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8090/api/collections/spese/records/${id}`, {
      method: "DELETE"
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting item:", error);
    return null;
  }
};

export { DBfetchItems, DBpushItem, DBDeleteItem };
