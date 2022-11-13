

export const LoadingComponent = () => {
  return (
    <div
      className="d-flex justify-content-center alert alert-primary text-center"
      role="alert"
    >
      <div>
        Loading...
        <div className="spinner-border text-secondary ms-2" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    </div>
  );
}
