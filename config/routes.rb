Rails.application.routes.draw do
  namespace :api do
    # Authentication
    post 'authenticate', to: 'authentication#authenticate'
    post 'registration', to: 'authentication#registration'
    post 'validate_token', to: 'authentication#validate_token'

    resources :items
  end
end
