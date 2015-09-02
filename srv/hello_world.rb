require 'grape'

class HelloWorld < Grape::API
  format :json
  namespace :hello do
    get :world do
      {hello: 'world'}
    end
  end
end
