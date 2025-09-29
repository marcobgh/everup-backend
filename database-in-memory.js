
export class DatabaseMemory {
    #clients = new Map()

    listClients() {
        return Array.from(this.#clients.values());
    }

    findClientByCnpj(cnpj) {
        for (const client of this.#clients.values()) {
            if (client.cnpj === cnpj) {
                return client;
            }   
        }
        return undefined; // caso não encontre
    }

    create(client) {
        const clientId = client.cnpj;
        this.#clients.set(clientId, client);
    }

    update(id, client) {
        this.#clients.set(id, client);
    }
    
    delete(cnpj) {
        this.#clients.delete(cnpj);
    }

    [Symbol.iterator]() {
        return this.#clients.keys();
    }
}