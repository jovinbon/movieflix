import { AxiosRequestConfig } from 'axios';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { requestBackend } from 'util/requests';

type urlParams = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId }: urlParams) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const oneSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue("text", '');
        console.log('SUCCESS', response);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };

  return (
    <div className="detail-review">
      <form onSubmit={handleSubmit(oneSubmit)}>
        <div className="mb-4">
          <input
            {...register('text', {
              required: 'Campo obrigatório.',
            })}
            type="text"
            placeholder="Deixe sua avaliação aqui"
            name="text"
            className="form-control review-input"
          />
          <div className="invalid-feedback d-block">
            {errors.text?.message}
          </div>
        </div>
        <div className="button-review">
          <Button text="SALVAR AVALIAÇÃO" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
