import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type urlParams = {
  movieId: string;
  onInsertUpdatePageReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertUpdatePageReview }: urlParams) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const oneSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue("text", '');
        onInsertUpdatePageReview(response.data)
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
          <button className="btn">
            <h2>SALVAR AVALIAÇÃO</h2> 
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
