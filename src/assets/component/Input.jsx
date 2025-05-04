function Input({ register, id, labelText, type = "text", rules = {}, mark, errors = {} }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="block text-primary">
                <span className="text-red-600">{mark}</span>
                {labelText}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    className={`outline-2 outline-gray-300 focus-within:outline-offset-2 focus-within:outline-emerald-700 block w-full px-4 py-2 rounded-lg ${errors[id] && 'invalid:outline-red-500'}`}
                    id={id}
                    placeholder={`請輸入${labelText}`}
                    {...register(id, rules)}
                />
            </div>
            {errors[id] && (
                <div className="invalid-feedback">{errors?.[id]?.message}</div>
            )}
        </div>)
}

export default Input