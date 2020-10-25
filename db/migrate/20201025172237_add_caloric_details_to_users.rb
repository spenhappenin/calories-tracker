class AddCaloricDetailsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :gender, :string
    add_column :users, :age, :integer
    add_column :users, :height_ft, :integer
    add_column :users, :height_inch, :integer
    add_column :users, :current_weight, :integer
    add_column :users, :goal_weight, :integer
    add_column :users, :activity_status, :string
    add_column :users, :initial_submission_date, :date
  end
end
