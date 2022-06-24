class AddUserToExperiments < ActiveRecord::Migration[7.0]
  def change
    add_reference :experiments, :user, null: false, foreign_key: true
  end
end
