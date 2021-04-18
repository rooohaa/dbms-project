import * as React from 'react'

import './SearchBar.css'

interface IProps {
   onSearch: (playerName: string) => void
}

const SearchBar: React.FC<IProps> = ({ onSearch }) => {
   const [value, setValue] = React.useState<string>('')

   React.useEffect(() => {
      if (value === '') onSearch(value)
   }, [value])

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault()

      onSearch(value)
   }

   return (
      <form className="form" onSubmit={handleSubmit}>
         <div className="form-control">
            <input
               type="text"
               required
               value={value}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
               }
               placeholder="Player name..."
            />
            <button type="submit">Search</button>
         </div>
      </form>
   )
}

export { SearchBar }
