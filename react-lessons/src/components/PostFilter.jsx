import React from 'react'
import MyInput from '../UI/input/MyInput'
import MySelect from '../UI/select/MySelect'

const PostFilter = ({limit, setLimit, filter, setFilter}) => {
  return (
    <div>
        <MyInput 
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            placeholder="search"
        />
        <MySelect
            value={filter.sort}
            onChange={(selectedSort) => {
                setFilter({ ...filter, sort: selectedSort })
            }}
            defaultValue='Sorted by'
            options={[
            {value: 'title', name: "By Name"},
            {value: 'body', name: "By Description"}
            ]}
        />
      <MySelect
            value={limit}
            onChange={(value) => {
                setLimit(value)
            }}
            defaultValue='Number of posts per page'
            options={[
            {value: 5, name: "5"},
            {value: 10, name: "10"},
            {value: 25, name: "25"},
            {value: -1, name: "Show all"},
            ]}      />
    </div>
  )
}

export default PostFilter