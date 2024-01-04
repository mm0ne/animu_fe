export interface ComponentWithChildren {
  children: React.ReactNode;
  className?: string;
}

export interface BaseResponse<T> {
  status: "success" | "failed";
  data: T;
  message?: string;
}
