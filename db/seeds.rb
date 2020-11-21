# Dir[File.join(Rails.root, "db", "seeds", "*.rb")].sort.each do |seed|
#   puts "Seeding #{seed}"
#   load seed
#   puts ""
# end


#########################
#####     USERS     #####
#########################

# activity_statuses = ['sedentary', 'light', 'moderate', 'very active']

user = User.create(
  first_name: 'Hugh',
  last_name: 'Peppercorn',
  email: 'test@test.com',
  password: 'password',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMqIekyXIictVeZ8JUSW-d5RmsxXHdfA6WVPdh55g474N5y496A',
  gender: 'm',
  age: 30,
  height_ft: 6,
  height_inch: 3,
  current_weight: 245,
  goal_weight: 230,
  activity_status: 'moderate',
  initial_submission_date: Date.today
)

user2 = User.create(
  first_name: 'Debbie',
  last_name: 'Claymore',
  email: 'test2@test.com',
  password: 'password',
  avatar: 'https://1721181113.rsc.cdn77.org/data/images/full/26803/90-year-old-belgian-woman-died-of-coronavirus-after-refusing-a-respirator-telling-her-doctors-to-save-it-for-younger-patients.jpg',
  gender: 'f',
  age: 25,
  height_ft: 5,
  height_inch: 6,
  current_weight: 160,
  goal_weight: 150,
  activity_status: 'very',
  initial_submission_date: Date.today - 30
)


#########################
#####     Items     #####
#########################

20.times do
  user.items.create(name: Faker::Food.dish, cals: rand(50...1000))
end

20.times do
  user2.items.create(name: Faker::Food.dish, cals: rand(50...1000))
end