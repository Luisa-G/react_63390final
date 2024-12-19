

export default function Checkout() {
    return (
        <div>
            <form>
                <label>Nombre</label>
                <input type="text" />
                <label>Apellido</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Teléfono</label>
                <input type="number" />
                <button type="submit">Confirmar compra</button>
            </form>
        </div>
    )
}
