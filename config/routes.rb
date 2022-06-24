Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  Rails.application.routes.draw do

    resources :users, only: [:show, :create]
    resources :chemicals, only: [:index, :create, :update, :destroy]
    resources :chemical_experiments, only: [:create]
    resources :experiments, only: [:create]

    delete "/chemical_experiments", to: "chemical_experiments#destroy"
    get "/users/:user_id/experiments", to: "users#experiments"
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    get "/auth", to: "users#show"
    delete "/logout", to: "sessions#destroy"
  end
end
