import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

export type CardFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: CardFilterData) => void;
};

const CardFilter = ({ onSubmitFilter }: Props) => {
  const { handleSubmit, setValue, getValues, control } =
    useForm<CardFilterData>();

  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const onSubmit = (filterData: CardFilterData) => {
    onSubmitFilter(filterData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: CardFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/genres`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="base-card movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="filter-container">
          <div className="movie-filter-genre-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenres}
                  isClearable
                  placeholder="Gênero"
                  classNamePrefix="movie-filter-select"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardFilter;
