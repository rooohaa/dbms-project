import * as React from 'react'
import './SearchBar.css'

interface IProps {
   onSearch: (playerName: string) => void
   onAdd: () => void
}

const SearchBar: React.FC<IProps> = ({ onSearch, onAdd }) => {
   const [value, setValue] = React.useState<string>('')

   React.useEffect(() => {
      if (value === '') onSearch(value)
   }, [value])

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault()

      onSearch(value)
   }

   return (
      <div className="form-wrap">
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
         <button className="add-btn" onClick={onAdd}>
            Add Player
         </button>
      </div>
   )
}

export { SearchBar }
